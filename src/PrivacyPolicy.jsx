import React from "react";

export default function PrivacyPolicy() {
    return (
        <div className="privacy-page">
            <div className="privacy-card glass-panel">

                {/* ===== LOGO ===== */}
                <img
                    src="/fundrop-logo.png"
                    alt="FunDrop Studio"
                    className="privacy-logo"
                />

                <h1>Privacy Policy</h1>
                <p className="updated">Last updated: February 2026</p>

                <p>
                    This Privacy Policy explains how <b>FunDrop Studio</b> handles user data
                    across its games and applications. Your privacy matters to us, and we
                    are committed to providing safe, transparent, and enjoyable gaming
                    experiences.
                </p>

                <h2>Who We Are</h2>
                <p>
                    FunDrop Studio is a game development studio that creates casual,
                    arcade, simulation, and interactive games for multiple platforms.
                    This Privacy Policy applies to <b>all games and applications</b>
                    published by FunDrop Studio, unless stated otherwise.
                </p>

                <h2>Information Collection</h2>
                <p>
                    FunDrop Studio does <b>not collect</b>, store, or share any personal
                    information such as names, email addresses, phone numbers, precise
                    locations, or payment details.
                </p>

                <h2>Third-Party Services</h2>
                <p>
                    Our games do not use third-party services that collect personal user
                    data. We do not use analytics, advertising SDKs, or tracking
                    technologies unless explicitly stated within a specific application.
                </p>

                <h2>Children’s Privacy</h2>
                <p>
                    Our games are not intentionally directed toward children under the
                    age of 13. We do not knowingly collect personal information from
                    children.
                </p>

                <h2>Data Security</h2>
                <p>
                    Since no personal data is collected, there is no risk of personal data
                    exposure or misuse through our applications.
                </p>

                <h2>Changes to This Policy</h2>
                <p>
                    This Privacy Policy may be updated from time to time as our studio and
                    products evolve. Any changes will always be reflected on this page.
                </p>

                <h2>Contact</h2>
                <p>
                    If you have any questions or concerns regarding this Privacy Policy,
                    you can contact us at:
                </p>

                <p className="contact-mail">
                    📧 fundropstudio@gmail.com
                </p>

            </div>
        </div>
    );
}
