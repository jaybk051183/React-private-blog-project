import React from "react";
import{Link} from "react-router-dom";


function HomePage() {
    return(
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid animi consequatur deleniti dolores eaque error et, labore magni maiores minima, nostrum odit porro praesentium quos rem totam vitae voluptatibus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque commodi consectetur dolor expedita ipsam mollitia nam, natus quod ratione! Ad aliquid explicabo necessitatibus nihil nulla perspiciatis quibusdam reprehenderit ut.</p>
            <p>Voor een veilige toegang <Link to="/login">log hier</Link> in</p>
        </div>
    )
}
export default HomePage;