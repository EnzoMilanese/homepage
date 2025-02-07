const SourceCodeIcon = ({url, className}) => {
    return<a href={url}>
        <img 
            src="sourceCode.svg"
            alt="Repositório no GitHub" 
            height="30"
            width="30"
            className={className}
        />
    </a>    
};

export default SourceCodeIcon;