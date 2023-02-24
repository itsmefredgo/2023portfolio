import React from "react";

interface TechIconName {
    name: string;
}

const ProjectIcon: React.FC<TechIconName> = (props) => {

    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    let url = "";

    const nameLowered = props.name.toUpperCase()

    switch(nameLowered) {
        case "HTML":
            return(<span><img src="https://img.shields.io/badge/HTML-e34f26?style=plastic&logo=html5&logoColor=white"/></span>)
            break;
        case "CSS":
            return(<span><img src="https://img.shields.io/badge/CSS-1572b6?style=plastic&logo=css3&logoColor=white"/></span>)
            break;
        case "JAVASCRIPT":
            return(<span><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=plastic&logo=javascript&logoColor=white"/></span>)
            break;
        case "C":
            return(<span><img src="https://img.shields.io/badge/C-A8B9CC?style=plastic&logo=c&logoColor=white"/></span>)
            break;
        case "C++":
            return(<span><img src="https://img.shields.io/badge/C++-00599C?style=plastic&logo=c++&logoColor=white"/></span>)
            break;
        case "PYTHON":
            return(<span><img src="https://img.shields.io/badge/Python-3776AB?style=plastic&logo=python&logoColor=white"/></span>)
            break;
        case "R":
            return(<span><img src="https://img.shields.io/badge/R-276DC3?style=plastic&logo=R&logoColor=white"/></span>)
            break;
        case "HASKELL":
            return(<span><img src="https://img.shields.io/badge/HasKell-5D4F85?style=plastic&logo=haskell&logoColor=white"/></span>)
            break;
        case "REACT":
            return(<span><img src="https://img.shields.io/badge/React-61dafb?style=plastic&logo=react&logoColor=black"/></span>)
            break;
        case "NEXTJS":
            return(<span><img src="https://img.shields.io/badge/Next.js-000000?style=plastic&logo=Next.js&logoColor=white"/></span>)
            break;
        case "MATERIAL UI":
            return(<span><img src="https://img.shields.io/badge/Material UI-007FFF?style=plastic&logo=MUI&logoColor=white"/></span>)
            break;
        case "BOOTSTRAP":
            return(<span><img src="https://img.shields.io/badge/Bootstrap-7952B3?style=plastic&logo=bootstrap&logoColor=white"/></span>)
            break;
        case "TAILWINDCSS":
            return(<span><img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=plastic&logo=tailwindcss&logoColor=white"/></span>)
            break;
        case "GIT":
            return(<span><img src="https://img.shields.io/badge/Git-f05032?style=plastic&logo=git&logoColor=white"/></span>)
            break;
        case "GITHUB":
            return(<span><img src="https://img.shields.io/badge/GitHub-181717?style=plastic&logo=github&logoColor=white"/></span>)
            break;
        case "GITLAB":
            return(<span><img src="https://img.shields.io/badge/GitLab-0052cc?style=plastic&logo=bitbucket&logoColor=white"/></span>)
            break;
        case "AWS":
            return(<span><img src="https://img.shields.io/badge/AWS-232f3e?style=plastic&logo=amazon-aws&logoColor=white"/></span>)
            break;
        case "VERCEL":
            return(<span><img src="https://img.shields.io/badge/Vercel-000000?style=plastic&logo=vercel&logoColor=white"/></span>)
            break;
        case "HEROKU":
            return(<span><img src="https://img.shields.io/badge/Heroku-430098?style=plastic&logo=heroku&logoColor=white"/></span>)
            break;
        case "JUPYTER":
            return(<span><img src="https://img.shields.io/badge/Jupyter-F37626?style=plastic&logo=jupyter&logoColor=black"/></span>)
            break;
        case "SCIKITLEARN":
            return(<span><img src="https://img.shields.io/badge/Scikit Learn-F7931E?style=plastic&logo=scikit-learn&logoColor=black"/></span>)
            break;
        case "PANDAS":
            return(<span><img src="https://img.shields.io/badge/Pandas-150458?style=plastic&logo=pandas&logoColor=white"/></span>)
            break;
        case "NUMPY":
            return(<span><img src="https://img.shields.io/badge/Numpy-013243?style=plastic&logo=numpy&logoColor=white"/></span>)
            break;
        case "BINANCE":
            return(<span><img src="https://img.shields.io/badge/Binance-F0B90B?style=plastic&logo=binance&logoColor=white"/></span>)
            break;
        case "INTELLIJ":
            return(<span><img src="https://img.shields.io/badge/IntelliJ IDEA-F0B90B?style=plastic&logo=intellij idea&logoColor=white"/></span>)
            break;
        case "PHP":
            return(<span><img src="https://img.shields.io/badge/PHP-777BB4?style=plastic&logo=php&logoColor=white"/></span>)
            break;
        case "MYSQL":
            return(<span><img src="https://img.shields.io/badge/MySQL-4479A1?style=plastic&logo=MySQL&logoColor=white"/></span>)
            break;
        case "RSTUDIO":
            return(<span><img src="https://img.shields.io/badge/R Studio-75AADB?style=plastic&logo=RSTUDIO&logoColor=white"/></span>)
            break;
        case "WIRESHARK":
            return(<span><img src="https://img.shields.io/badge/Wireshark-1679A7?style=plastic&logo=Wireshark&logoColor=white"/></span>)
            break;
        case "MAMP":
            return(<span><img src="https://img.shields.io/badge/Mamp-02749C?style=plastic&logo=Mamp&logoColor=white"/></span>)
            break;
        case "JSON":
            return(<span><img src="https://img.shields.io/badge/Json-000000?style=plastic&logo=Json&logoColor=white"/></span>)
            break
        case "UNITY":
            return(<span><img src="https://img.shields.io/badge/Unity-FFFFFF?style=plastic&logo=Unity&logoColor=black"/></span>)
            break
        case "C#":
            return(<span><img src="https://img.shields.io/badge/C%23-239120?style=plastic&logo=C-Sharp&logoColor=white"/></span>)
            break
        case "TYPESCRIPT":
            return(<span><img src="https://img.shields.io/badge/typescript-3178C6?style=plastic&logo=typescript&logoColor=white"/></span>)
            break
        case "POSTMAN":
            return(<span><img src="https://img.shields.io/badge/Postman-FF6C37?style=plastic&logo=postman&logoColor=white"/></span>)
            break
        case "SPRING":
            return(<span><img src="https://img.shields.io/badge/spring-6DB33F?style=plastic&logo=spring&logoColor=white"/></span>)
            break
        case "REDUX":
            return(<span><img src="https://img.shields.io/badge/redux-764ABC?style=plastic&logo=redux&logoColor=white"/></span>)
            break
        case "ESLINT":
            return(<span><img src="https://img.shields.io/badge/eslint-4B32C3?style=plastic&logo=eslint&logoColor=white"/></span>)
            break
        default:
            url = "https://img.shields.io/badge/" + props.name + "-" + randomColor + "?style=plastic"
            return(<span><img src={url}/></span>)
      }
};

export default ProjectIcon; 