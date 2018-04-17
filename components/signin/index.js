export default function SignIn({ signInString }) {
    return <div className="sign-in">
        <img className="logo" src={'https://i.imgur.com/u3c6Dsf.png'} alt="logo" />
        <a className="sign-in__a" href="/auth">{ signInString }</a>
        <style jsx>{`
            .logo
            {
                margin-bottom: -20px;
            }

            .sign-in
            {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                position: absolute;
                height: 70%;
                width: 97%;
            }

            .sign-in__a,
            .sign-in__a:link,
            .sign-in__a:visited
            {
                text-decoration: none;
                font-family: sans-serif;
                font-size: 24px;
                line-height: 40px;
                padding: 20px 40px;
                display: block;
                border: 2px solid #FF7F50;
                text-align: center;
                border-radius: 3px;
                background-color: #ffffff;
                color: #000;
            }

            .sign-in__a:hover
            {
                background-color: #f55649;
                color: #ffffff;
            }
        `}</style>
    </div>;
}
