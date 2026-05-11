import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import type { ReactNode } from "react";

import styles from "./index.module.css";

export default function Home(): ReactNode {
  const logoUrl = useBaseUrl("/img/logo.png");

  return (
    <Layout
      title={translate({
        id: "homepage.title",
        message: "IPI Research Platform",
      })}
      description={translate({
        id: "homepage.description",
        message:
          "A structured platform for interdisciplinary research projects, notes, and collaborative inquiry",
      })}
    >
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <img
              className={styles.logo}
              src={logoUrl}
              alt={translate({
                id: "homepage.logoAlt",
                message: "IPI Research Platform",
              })}
            />

            <p className={styles.kicker}>
              <Translate id="homepage.kicker">
                Interdisciplinary Research Infrastructure
              </Translate>
            </p>

            <h1>
              <Translate id="homepage.heroTitle">
                A structured space for open research.
              </Translate>
            </h1>

            <p className={styles.subtitle}>
              <Translate id="homepage.subtitle">
                A clear environment for research projects, conceptual
                development, mathematical formalization, open questions, and
                interdisciplinary collaboration.
              </Translate>
            </p>

            <div className={styles.actions}>
              <Link
                className="button button--primary button--lg"
                to="/docs/intro"
              >
                <Translate id="homepage.projectsButton">
                  Explore Research Projects
                </Translate>
              </Link>

              <Link className="button button--secondary button--lg" to="/notes">
                <Translate id="homepage.notesButton">
                  Read Research Notes
                </Translate>
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>
              <Translate id="homepage.structureKicker">
                Platform Structure
              </Translate>
            </p>

            <h2>
              <Translate id="homepage.structureTitle">
                Built for clarity, integration, and collaborative exploration.
              </Translate>
            </h2>

            <p>
              <Translate id="homepage.structureDescription">
                The platform is designed to reduce unnecessary fragmentation by
                making research directions easier to understand, compare,
                extend, and contribute to.
              </Translate>
            </p>
          </div>

          <div className={styles.grid}>
            <Link className={styles.card} to="/docs/projects/idt/">
              <span className={styles.cardNumber}>01</span>

              <h3>
                <Translate id="homepage.projectsCardTitle">Projects</Translate>
              </h3>

              <p>
                <Translate id="homepage.projectsCardDescription">
                  Structured research spaces organized around conceptual
                  foundations, formal components, validation paths, and open
                  questions.
                </Translate>
              </p>
            </Link>

            <Link className={styles.card} to="/docs/project-page-standard">
              <span className={styles.cardNumber}>02</span>

              <h3>
                <Translate id="homepage.standardsCardTitle">
                  Project Standards
                </Translate>
              </h3>

              <p>
                <Translate id="homepage.standardsCardDescription">
                  Shared structural guidelines that help projects remain
                  coherent while preserving local freedom in notation, concepts,
                  and methodology.
                </Translate>
              </p>
            </Link>

            <Link className={styles.card} to="/notes">
              <span className={styles.cardNumber}>03</span>

              <h3>
                <Translate id="homepage.notesCardTitle">
                  Research Notes
                </Translate>
              </h3>

              <p>
                <Translate id="homepage.notesCardDescription">
                  Essays, exploratory texts, and conceptual discussions intended
                  to develop ideas and create bridges across disciplines.
                </Translate>
              </p>
            </Link>
          </div>
        </section>

        <section className={styles.statement}>
          <p>
            <Translate id="homepage.statementLine1">
              The objective is not to make every idea identical.
            </Translate>
            <br />
            <Translate id="homepage.statementLine2">
              It is to make ideas clear enough that meaningful interaction
              becomes possible.
            </Translate>
          </p>
        </section>
      </main>
    </Layout>
  );
}
