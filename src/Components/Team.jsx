// import React from "react";

import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const teamMembers = [
  {
    name: "George Atta Poku",
    role: "Founder & CEO",
    image: "/assets/AP luxury/ceo.png",
    desc: "Visionary leader with a passion for luxury cars.",
    instagram: "#",
    twitter: "#",
    whatsApp: "#",
  },
  {
    name: "Emmanuel",
    role: "Manager",
    image: "/assets/AP luxury/manager.jpg",
    desc: " making car dreams interactive.",
    linkedin: "#",
    twitter: "#",
    whatsApp: "#",
  },
  {
    name: "Cythia Carter",
    role: "Secretary",
    // image: "/assets/team/sophia.jpg",
    desc: "Designs sleek interfaces that feel like driving a supercar.",
    instagram: "#",
    twitter: "#",
    github: "#",
  },
];

export default function Team() {
  return (
    <section className="team-section">
      <h2 className="section-title">Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-img" />
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p className="desc">{member.desc}</p>
            <div className="social-icons">
              <a href={member.instagram}><FaInstagram /></a>
              <a href={member.twitter}><FaTwitter /></a>
              <a href={member.github}><FaWhatsapp /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
