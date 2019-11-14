import React from "react";
import Layout from "../components/layout";

import SEO from "../components/seo";
import Background from "../components/Home/Background";
import TitleContainer from "../components/TitleContainer";
import Wrapper from "../components/styles/Wrapper";
import HomeContent from "../components/Home/HomeContent";
import Aside from "../components/Home/Aside";

const IndexPage = () => (
  <Layout lang={"IT"}>
    <SEO title="Home" />
    <Background>
      <TitleContainer titleLeft="Studio Legale" titleRight="Barberio" />
    </Background>
    <Wrapper>
      <HomeContent>
        <div className="home-main-container">
          <p>
            Lo <strong>Studio Legale Barberio</strong> da anni si occupa di
            diritto internazionale, diritto penale, diritto di famiglia, diritto
            minorile, <strong>diritto dell’immigrazione</strong>, protezione
            internazionale e riconoscimento dell’asilo politico. Si impegna
            quotidianamente per la tutela dei diritti umani, in ambito civile,
            penale ed amministrativo.
          </p>
          <p>
            Lo Studio Legale Barberio è composto da un team affiatato di
            professionisti coordinato dal titolare Avvocato Laura Barberio{" "}
            <strong>
              <a href="https://drive.google.com/file/d/0BzSarPJRlgHnSHlGWG5vTUN0VXc/edit?usp=sharing">
                esperto in diritto dell’immigrazione
              </a>
            </strong>
            . Grazie alla maturata esperienza nell’ambito del diritto
            dell’immigrazione, si dedica con successo al diritto di asilo, per
            il riconoscimento della protezione internazionale dei rifugiati
            politici, vittime di tortura. Lo Studio Legale Barberio collabora
            attivamente con numerose associazioni tra cui “A buon Diritto
            onlus”, svolgendo attività di supporto nella tutela delle vittime di
            ogni tipo di discriminazione, in materia di immigrazione,
            riconoscimento dell’asilo politico, della protezione internazionale
            e del diritto alla salute anche in ambito carcerario.
          </p>
          <p>
            Lo Studio Legale Barberio si avvale anche di esperti collaboratori
            esterni specializzati in diritto civile, diritto del lavoro e
            previdenziale, diritto tributario, diritto della navigazione,
            diritto condominiale, diritto bancario, diritto dell’immigrazione,
            protezione internazionale e riconoscimento dell’asilo politico e di
            una fitta rete di corrispondenti in tutta Italia. L’Avvocato Laura
            Barberio ha partecipato in qualità di docente al Master MEDIM presso
            l’Università di Tor Vergata – Roma , nonché in qualità di relatore a
            numerosi convegni organizzati dal Consiglio dell’Ordine degli
            Avvocati di Roma in materia di diritto dell’immigrazione.
            Recentemente, il giorno 31 marzo 2016 l’Avvocato Laura Barberio ha
            preso parte, in qualità di relatore, al Terzo Incontro del Corso di
            Formazione a più voci di approfondimento in materia di IMMIGRAZIONE
            relativo a “La Disciplina delle Espulsioni Amministrative” presso la
            Corte d’Appello di Roma – Aula Europa organizzato dalla Scuola
            Superiore della Magistratura e dall’Ordine degli Avvocati di Roma.
            Nello specifico l’Avvocato Laura Barberio ha relazionato in merito a
            “I Rapporti tra Espulsione e Protezione Internazionale”. Per
            qualsiasi approfondimento è possibile consultare il programma
            dell’incontro.
          </p>
        </div>
        <Aside />
      </HomeContent>
    </Wrapper>
  </Layout>
);

export default IndexPage;
