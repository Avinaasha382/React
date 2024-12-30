
export default function UserInput({changeUserInfo,userInfo}) {

    function handleChange(e,userParameter) {
        const newUserInfo = {...userInfo, [userParameter]:+e.target.value};
        changeUserInfo(newUserInfo);
    }

    return (
        <section id = "user-input">
            <div className="input-group">
                <p>
                    <label htmlFor=""> Initial Investment </label>
                    <input type="number" onChange={(e) => {
                        return handleChange(e,"initialInvestment");
                    }} />
                </p>
                
                <p>
                    <label htmlFor=""> Annual Investment </label>
                    <input type="number"  onChange={(e) => {
                        return handleChange(e,"annualInvestment");
                    }}/>
                </p>
            </div>

            <div className="input-group">
                <p>
                    <label htmlFor=""> Expected Return </label>
                    <input type="number"  onChange={(e) => {
                        return handleChange(e,"expectedReturn")
                    }}/>
                </p>
                <p>
                    <label htmlFor=""> Duration </label>
                    <input type="number" onChange={(e) => handleChange(e,"duration")} />
                </p>
            </div>
        </section>
    )
}