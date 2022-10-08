import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section id="about-me" className="section">
      <h2 className="section__header">#About me</h2>
      <p className="paragraph">
        I love creating thing in internet that gives people joy and happines.
      </p>
      <p className="paragraph">
        Today I focus on building accessible and fast websites for my clients.
      </p>
      <p className="paragraph mt-4 font-bold">
        Here is my recipe for your success:
      </p>
      <p className="paragraph">
        I pay a lot of attention to code optimisation, making your website load
        fast
      </p>
      <p className="paragraph">
        I configure your website for search engines, making it easier for your
        potential clients to find you.
      </p>
      <p className="paragraph">
        My websites are accessible to visitors with different disabilities.
      </p>
    </section>
  );
};

export default AboutMe;
