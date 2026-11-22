# Lin Xin · Portfolio

I am Lin Xin (林鑫), a Game Design and Computer Science student at DigiPen Singapore. This repository is my portfolio site: case studies of games I have worked on, and of the tools behind one of them. The site is in English and Chinese.

Live site: [linx-z0.github.io/portfolio](https://linx-z0.github.io/portfolio/)

The game and engine source is not in this repo. This is the write-up.

## Read these three first

| Project | What it is | Page |
| --- | --- | --- |
| Death's Refrain | Flagship. A one-unit grid tactics game. I was Design Lead and wrote the Lua. | [DeathsRefrain.html](DeathsRefrain.html) |
| Overseas | Constrained. A 14-week class project: survival fishing in C++. I owned the fishing loop, the timing minigame, and the health and supply bars. | [Overseas.html](Overseas.html) |
| Hellmaker | Skill proof, and not a game. The custom C++ engine under Death's Refrain. I built the debug layer and the editor tools. | [Hellmaker.html](Hellmaker.html) |

Death's Refrain and Hellmaker are one Year 2 project, split by the work. Each of the three pages opens with the same six points: problem, constraint, test, failure, change, and result. The rest of the page is the system write-up.

## Also on the site

The homepage lists more work: card and board games (Acquit, Conquest), level design, mechanics prototypes, a Death's Refrain wiki, and a few written analyses. Resumes are in `Assets/`.

## Layout

- `index.html` is the homepage. Other `*.html` files are project pages.
- `i18n/` holds the English and Chinese copy for each project. Shared interface strings are in `translations.js`.
- `style.css`, `script.js`, and `i18n.js` are the site itself.
- `Assets/` holds images, video, and PDFs.
- `wiki/` is the Death's Refrain gameplay wiki.
- `.nojekyll` tells GitHub Pages to serve these files as they are.

## Preview locally

From this folder:

```bash
python -m http.server 8765
```

Open `http://127.0.0.1:8765`.

## Contact

- Email: soniclinxin@gmail.com
- LinkedIn: [xinl0](https://www.linkedin.com/in/xinl0/)
- GitHub: [LinX-Z0](https://github.com/LinX-Z0)

## License

[CC0 1.0](LICENSE). The write-ups and site files in this repo are released to the public domain. Game art, music, and teammates' work shown here stay theirs.
