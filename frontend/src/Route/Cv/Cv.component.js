import { PureComponent } from 'react';
import { stringify } from 'rebem-classname';
import me from 'Assets/Cv/me.png';
import CV from 'Assets/Cv/CV.pdf';
import { Link } from 'react-router-dom';

export class Cv extends PureComponent {
  renderPhotoName() {
    return (
      <div
        className={ stringify({
          block: 'Cv',
          elem: 'PhotoNameContainer'
        }) }
      >
        <img
          className={ stringify({
            block: 'Cv',
            elem: 'Photo'
          }) }
          src={ me }
          alt="It's-a-me"
        />
        <div
          className={ stringify({
            block: 'Cv',
            elem: 'NameContainer'
          }) }
        >
          <h1>Manuel Trinidad Morales</h1>
          <span>Software Engineer</span>
          <a href={ CV }>📄 [PDF] Download</a>
        </div>
      </div>
    );
  }

  renderContact() {
    return (
      <div
        className={ stringify({
          block: 'Cv',
          elem: 'Contact'
        }) }
      >
        <h2>Contact</h2>
        <Link to="/">kinowashere.com</Link>
        <a href="mailto:manuel.trinidad.mo@gmail.com">manuel.trinidad.mo@gmail.com</a>
        <span>🇪🇪 Tallinn, Estonia</span>
        <a href="https://github.com/kinowashere">github: kinowashere</a>
      </div>
    );
  }

  renderAchievements() {
    return (
      <div
        className={ stringify({
          block: 'Cv',
          elem: 'Achievements'
        }) }
      >
        <h2>Achievements</h2>
        <span>
          Finalist@
          <a href="https://sites.google.com/view/kyberolympia/eng/about-the-project">CyberSpike</a>
        </span>
        <span>Summer 2020</span>
        <p>
          { 'Part of the final contenders in one of Estonia\'s biggest attack / defense competitions' }
        </p>
      </div>
    );
  }

  renderTechnologies() {
    return (
      <div
        className={ stringify({
          block: 'Cv',
          elem: 'Technologies'
        }) }
      >
        <h2>Technologies</h2>
        <div>
          <span>PHP</span>
          <span>Laravel, Magento 2</span>
        </div>
        <div>
          <span>JS</span>
          <span>React</span>
        </div>
        <div>
          <span>Python</span>
          <span>Django, sklearn</span>
        </div>
        <div>
          <span>C#</span>
          <span>.NET Core</span>
        </div>
        <div>
          <span>Java</span>
          <span>Spring Boot</span>
        </div>
        <span>Ansible - Docker - SQL - Linux</span>
        <span>
          { 'This website is built on ' }
          <b>React</b>
          { ' + ' }
          <b>Laravel</b>
          !
        </span>
        <span>
          { 'Check it out at ' }
          <a href="https://github.com/kinowashere/kwh">github.com:kinowashere/kwh</a>
        </span>
      </div>
    );
  }

  renderCareer() {
    return (
      <div
        className={ stringify({
          block: 'Cv',
          elem: 'Career'
        }) }
      >
        <h2>Career Experience</h2>
        <div>
          <h3>Developer</h3>
          <span>Outvio | 2022 - present</span>
          <p>Develop FE using React-based tools</p>
        </div>
        <div>
          <h3>Developer</h3>
          <span>Scandiweb | 2021 - 2022</span>
          <p>Develop Magento 2 BE and FE using React, Node and Docker-based tools.</p>
        </div>
        <div>
          <h3>3D Designer for AR</h3>
          <span>322 Design | 2018</span>
          <p>Create and design 3D models for Unity using AR technologies for a development fair</p>
        </div>
      </div>
    );
  }

  renderEducation() {
    return (
      <div
        className={ stringify({
          block: 'Cv',
          elem: 'Education'
        }) }
      >
        <h2>Education</h2>
        <div>
          <h3>🇪🇪 Tallinn University of Technology</h3>
          <span>BSc in Cyber Security</span>
          <span>2018 - Present</span>
        </div>
        <div>
          <h3>🇪🇸 Universidad Carlos III de Madrid</h3>
          <span>Erasmus Exchange</span>
          <span>Fall 2019</span>
        </div>
        <div>
          <h3>🇯🇵 University of Electro-Communications</h3>
          <span>JUSST Exchange</span>
          <span>Spring 2021</span>
        </div>
      </div>
    );
  }

  renderLanguages() {
    return (
      <div
        className={ stringify({
          block: 'Cv',
          elem: 'Languages'
        }) }
      >
        <h2>Languages</h2>
        <div>
          <div>
            <span>🇲🇽 Spanish</span>
            <span>Native</span>
          </div>
          <div>
            <span>🇺🇸 English</span>
            <span>Fluent</span>
            <span>TOEFL ITP 647</span>
          </div>
          <div>
            <span>🇯🇵 Japanese</span>
            <span>Beginner</span>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div
        className={ stringify({
          block: 'Cv',
          elem: 'Container'
        }) }
      >
        { this.renderPhotoName() }
        <div
          className={ stringify({
            block: 'Cv',
            elem: 'ColumnsContainer'
          }) }
        >
          <div>
            { this.renderContact() }
            { this.renderAchievements() }
            { this.renderTechnologies() }
          </div>
          <div>
            { this.renderCareer() }
            { this.renderEducation() }
            { this.renderLanguages() }
          </div>
        </div>
      </div>
    );
  }
}

export default Cv;
