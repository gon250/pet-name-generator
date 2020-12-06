import React from 'react'

export default function Footer() {
    return (
        <footer className="footer has-background-white">
            <div className="content has-text-centered">
                <p>
                    © {new Date().getFullYear()}, Built with 💛 {` `}{' '}
                    <a href="https://www.twitter.com/gon250">Gonzalo</a>
                </p>
            </div>
        </footer>
    )
}
