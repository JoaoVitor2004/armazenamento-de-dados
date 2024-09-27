import Image from "next/image";
import styles from "./styles/page.module.css";

import Logo from './assets/images/logo.svg'
import Document from './assets/images/icon-document.svg'
import Folder from './assets/images/icon-folder.svg'
import Upload from './assets/images/icon-upload.svg'
import BackgroundDesktop from './assets/images/bg-desktop.png'

export const metadata = {
  title: 'Componente armazenamento de dados',
  description: 'Desafio do frontend mentor',
  author: 'João Vitor de Souza'
}

export default function Home() {
  return (
    <main className={styles.page}>
      <Image className={styles.background} src={BackgroundDesktop} alt="background desktop" />
      <section className={styles.fylo}>
        <Image src={Logo} alt="logotipo" />
        <div className={styles.container}>
          <div className={styles.icon}>
            <Image src={Document} alt="icon document" />
          </div>
          <div className={styles.icon}>
            <Image src={Folder} alt="icon folder" />
          </div>
          <div className={styles.icon}>
            <Image src={Upload} alt="icon upload" />
          </div>
        </div>
      </section>
      <section className={styles.containerArmazenamento}>
        <p>You’ve used <strong>815 GB</strong> of your storage</p>
        <div className={styles.slider}>
          <div className={styles.fundo}>
            <div className={styles.circle}></div>
          </div>
        </div>
        <div className={styles.armazenamento}>
          <p>0 GB</p>
          <p>1000 GB</p>
        </div>
        <div className={styles.message}>
          <p><span>185</span>GB Left</p>
        </div>
      </section>
    </main>
  );
}
