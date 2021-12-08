import React from 'react';
import '../DetailPage/detailpage.css';
import logo from '../Image/yellow_bg.jpeg';
const DetailPage = ({
  registrationDate,
  role,
  companyName,
  jobType,
  EmployeementType,
  ctc,
  companyDescription,
  EligibleCourses,
  cg,
  OtherDe,
}) => {
  return (
    <div id="detailpage">
      <div className="cardright">
        <div className="Company-details">
          <h1 className="company-position">Software Devloper</h1>
          <div className="company-name">
            <h3>Chaayos</h3>
          </div>
        </div>
      </div>
      <div className="description-company">
        <div className="description-title">Description:</div>
        <div className="description">
          About Chaayos Started by two IITians – Nitin Saluja and Raghav Verma –
          in November 2012, Chaayos is India’s most loved Chai Café. Chaayos is
          a contemporary take to the age-old concept of “Chai-adda” or "Tea
          Room" culture, a place where chai is considered the perfect companion
          to every discussion ranging from life, work, society & politics.
          Chaayos is known for its signature “Meri Wali Chai” where guests can
          choose exactly how to make their chai from over 80,000+ ways of making
          freshly brewed chai. The food menu at Chaayos revolves around Chai and
          suits all day consumption. Skills & Abilities Required: Java, Java8,
          Spring, Angularjs, Html, Css, Reactjs, Spring Mvc, Spring Boot, Mysql,
          Redis, Mongodb, Aws Role Summary 1. Should have a working knowledge of
          Java/Java8, Spring framework, Spring boot and Spring MVC 2. Should
          have a good understanding of Restful web services. 3. Should have
          experience in MySQL 4. Should be comfortable with Frontend
          Technologies as well like Javascript, HTML, CSS and Javascript
          frameworks. 5. Working knowledge of NoSQL databases like MongoDB would
          be desirable. 6. Working knowledge of different Caching strategies
          like Redis, Hazelcast would be desirable as well. 7. Should have
          experience in Tomcat8, Jboss server and Maven for Build Management. 8.
          Should have experience on working in Amazon Web Services and its
          different offerings. 9. Should have experience on working in Agile
          environment. 10. Knowledge of Testng, Junit And Mockito frameworks is
          desirable. 11. Working knowledge of Git and Github for Source Code
          Management.
        </div>
      </div>
      <div className="description-company">
        <div className="description-title">Duration</div>
        <div className="description">12 Months</div>
      </div>
      <div className="description-company">
        <div className="description-title">Eligible Courses</div>
        <div className="description">B.Tech - IT, B.Tech - CSE</div>
      </div>
      <div className="description-company">
        <div className="description-title">Eligibility Criteria</div>
        <div className="description">
          Education: B.E/B.TECH/M.C.A/M.TECH in Computer Science and Information
          Technology
        </div>
      </div>
      <div className="description-company">
        <div className="description-title">Selection Process Details</div>
        <div className="description">Online Test Tech Round 1</div>
      </div>
      <div className="description-company">
        <div className="description-title">Other Details</div>
        <div className="description">
          Internship Period is for 6 -12 months After the internship, for a
          selected few based on the performance and requirement of the company,
          the company will offer a package of Rs.12,00,000 Break down Fixed -
          Rs. 7,00,000/- Performance Linked Incentive - Rs. 2,00,000/- Employee
          Stock Options - Worth Rs.3,00,000/-
        </div>
      </div>
    </div>
  );
};
export default DetailPage;
