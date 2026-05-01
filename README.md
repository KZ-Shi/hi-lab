# Human-centric Intelligence Lab

Official website for the **Human-centric Intelligence Lab (HI Lab)**, a joint research initiative under the UniSQ-BUPT Cotutelle Program.

## About

The HI Lab brings together researchers from the University of Southern Queensland (UniSQ, Australia) and Beijing University of Posts and Telecommunications (BUPT, China) to advance human-centered AI research. Our PhD students are co-supervised by faculty from both institutions through the Cotutelle Program.

**Co-Directors:**
- Dr. Kaize Shi — Lecturer, UniSQ
- Dr. Yifan Zhu — Associate Professor, BUPT

## Research Areas

- Large Language Models & AI Safety
- Computational Social Systems
- Agentic AI & Human-AI Collaboration
- Recommender Systems & Graph Mining
- Urban Computing & Emergency Management
- Brain-Inspired AI

## Deployment

This site is designed for **GitHub Pages**. To deploy:

1. Push this repository to GitHub
2. Go to **Settings > Pages**
3. Set source to **Deploy from a branch** > `main` / `root`
4. The site will be available at `https://<username>.github.io/<repo-name>/`

For a custom domain, add a `CNAME` file with your domain name.

## Local Development

Simply open `index.html` in a browser, or use a local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Structure

```
├── index.html          # Main page (all sections)
├── css/
│   └── style.css       # Stylesheet
├── js/
│   └── main.js         # Interactivity (nav, animations, filters)
├── images/             # Photos and assets (add your own)
└── README.md
```

## Customization

- **Team photos**: Add images to `images/` and update the `person-avatar` elements in `index.html`
- **Publications**: Update the publications section with actual paper entries
- **News**: Add new `news-item` blocks to the news section
- **Colors**: Modify CSS variables in `:root` at the top of `css/style.css`
