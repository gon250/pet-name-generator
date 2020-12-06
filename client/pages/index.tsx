import Link from 'next/link'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons'

function IndexPage() {
    return (
        <>
            <Head>
                <title>🐶 Pet name generator</title>
            </Head>
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-full has-text-centered">
                            <h1 className="title is-2">
                                Generate name
                                <small>
                                    <FontAwesomeIcon className="ml-1 has-text-info" icon={faMars} />
                                    <FontAwesomeIcon className="ml-2 has-text-danger" icon={faVenus} />
                                </small>
                            </h1>
                        </div>
                    </div>
                    <div className="columns is-centered">
                        <div className="column is-two-fifths is-full has-text-centered">
                            <div className="box">
                                Generated name
                            </div>
                        </div>
                    </div>
                    <div className="columns is-centered">
                        <div className="column is-two-fifths">
                            <button className="button is-medium is-fullwidth is-danger">Medium</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IndexPage
