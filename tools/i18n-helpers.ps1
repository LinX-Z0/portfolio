function Escape-JsString([string]$s) {
  $sb = New-Object System.Text.StringBuilder
  foreach ($ch in $s.ToCharArray()) {
    $code = [int][char]$ch
    if ($ch -eq '\') { [void]$sb.Append('\\'); continue }
    if ($ch -eq '"') { [void]$sb.Append('\"'); continue }
    if ($ch -eq "`n") { [void]$sb.Append('\n'); continue }
    if ($ch -eq "`r") { [void]$sb.Append('\r'); continue }
    if ($ch -eq "`t") { [void]$sb.Append('\t'); continue }
    if ($code -lt 32 -or $code -gt 126) { [void]$sb.Append(('\u{0:x4}' -f $code)) }
    else { [void]$sb.Append($ch) }
  }
  return $sb.ToString()
}
function Fix-EnDashes([string]$s) { return $s.Replace([char]0xFFFD, [char]0x2014) }
function Get-PackEn([string]$path) {
  $t = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
  $m = [regex]::Match($t, '(?s)en:\s*\{(.*?)\n  \},')
  $body = $m.Groups[1].Value
  $pairs = [regex]::Matches($body, '"([^"]+)":\s*"((?:\\.|[^"\\])*)"')
  $out = [ordered]@{}
  foreach ($p in $pairs) {
    $key = $p.Groups[1].Value
    $val = $p.Groups[2].Value
    $sb = New-Object System.Text.StringBuilder
    for ($i=0; $i -lt $val.Length; $i++) {
      $c = $val[$i]
      if ($c -eq '\' -and $i+1 -lt $val.Length) {
        $n = $val[$i+1]
        if ($n -eq 'u' -and $i+5 -lt $val.Length) {
          $hex = $val.Substring($i+2,4)
          [void]$sb.Append([char][Convert]::ToInt32($hex,16))
          $i += 5; continue
        }
        if ($n -eq '"') { [void]$sb.Append('"'); $i++; continue }
        if ($n -eq '\') { [void]$sb.Append('\'); $i++; continue }
        if ($n -eq 'n') { [void]$sb.Append("`n"); $i++; continue }
      }
      [void]$sb.Append($c)
    }
    $out[$key] = Fix-EnDashes ($sb.ToString())
  }
  return $out
}
function Write-PackFromMaps([string]$outPath, $en, $zh) {
  $sb = New-Object System.Text.StringBuilder
  [void]$sb.AppendLine('PortfolioI18nMerge({')
  foreach ($langName in @('en','zh')) {
    $map = if ($langName -eq 'en') { $en } else { $zh }
    [void]$sb.AppendLine("  ${langName}: {")
    $keys = @($map.Keys)
    for ($i=0; $i -lt $keys.Count; $i++) {
      $k = $keys[$i]
      $comma = if ($i -lt $keys.Count-1) { ',' } else { '' }
      $esc = Escape-JsString ([string]$map[$k])
      [void]$sb.AppendLine(('    "{0}": "{1}"{2}' -f $k, $esc, $comma))
    }
    $trail = if ($langName -eq 'en') { ',' } else { '' }
    [void]$sb.AppendLine("  }$trail")
  }
  [void]$sb.AppendLine('});')
  $ascii = New-Object System.Text.UTF8Encoding $false
  [System.IO.File]::WriteAllText($outPath, $sb.ToString(), $ascii)
  $out = [System.IO.File]::ReadAllText($outPath)
  $zhPart = $out.Substring($out.IndexOf('zh: {'))
  $qq = ([regex]::Matches($zhPart, '\?\?')).Count
  $u = ([regex]::Matches($out, '\\u[0-9a-fA-F]{4}')).Count
  Write-Output ("Wrote {0}: ??= {1}; \u= {2}" -f $outPath, $qq, $u)
}