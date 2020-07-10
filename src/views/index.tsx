import React from 'react';
import Button, { ButtonType, ButtonSize } from '../components/Button/button'

// custom button
const ButtonElement = () => {
    return (
        <>
            <Button onClick={() => { console.log(111) }}>Default</Button>
            <Button size={ButtonSize.Large} disabled>Disabled Button</Button>
            <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large Primary</Button>
            <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Small Danger</Button>
            <Button btnType={ButtonType.Link} href="http://wwww.baidu.com" target="_blank">Button Link</Button>
            <Button btnType={ButtonType.Link} href="wwww.baidu.com" disabled>Disabled Link</Button>
        </>
    )
}


const App = () => {
    return (
        <>
            <ButtonElement />
        </>
    )
}
export default App;
