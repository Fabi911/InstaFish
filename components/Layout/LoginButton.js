import LoginButtonSVG from "@/public/img/login.svg";

export default function LoginButton({
                                        isLoggedIn,
                                        onToggleLogin,

                                    }) {
    const LoggedIn = (
        <LoginButtonSVG height={20} width={20} fill="var(--main-color2)"/>
    );
    const notLogin = (
        <LoginButtonSVG
            height={height}
            width={width}
            fill="transparent"
            stroke="black"
        />
    );
    return (
        <>
            <StyledLogin onClick={onToggleLogin}>
                {isLoggedIn ? LoggedIn : notLogin}
            </StyledLogin>
        </>
    );
}