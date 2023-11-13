function Skills() {
  return(
    <section className="flex flex-col justify-center items-center h-screen gap-4 leftSide relative font-bold" id="skills">
      <h2 className="s text-6xl absolute top-4">Skills</h2>
      <ul className="flex flex-col w-10/12" id="knowledge">
        <li className="flex">
            <ul className="leading-10 flex-col">
                <li className="list-icon"><h3 className="text-3xl font-bold">Language</h3></li>
                <li><p>JavaScript</p></li>
                <li><p>Ruby</p></li>
                <li><p>HTML</p></li>
                <li><p>CSS</p></li>
            </ul>
        </li>
        <li className="flex flex-row-reverse">
            <ul className="leading-10">  
                <li className="list-icon"><h3 className="text-3xl font-bold">Frameworks</h3></li>                            
                <li><p>React.js</p></li>
                <li><p>Ruby on Rails</p></li>
                <li><p>RSpec</p></li>
                <li><p>Capybara</p></li>  
                <li><p>Selenium</p></li>                       
            </ul>
        </li>
        <li className="flex">
            <ul className="leading-10">    
                <li className="list-icon"><h3 className="text-3xl font-bold">Skills</h3></li>
                <li><p>Database Management</p></li>
                <li><p>Version Control</p></li>
                <li><p>CLI</p></li>
                <li><p>API Design</p></li>
                <li><p>Web Development</p></li>                                 
            </ul>
        </li>
      </ul>
    </section>
  );
}

export default Skills;