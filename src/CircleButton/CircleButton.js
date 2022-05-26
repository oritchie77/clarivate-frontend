import './CircleButton.scss'

const CircleButton = (props) => {
    const handleClick = () => {
        props.handleExpandButtonClick(props.thumbnailId)
    }

    if (props.expanded) {
        return (
            <div className={'button closeButton'} onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    {/*Font Awesome Pro 6.0.0-alpha1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License)*/}
                    <path d="M432 256C432 265 425 272 416 272H240V448C240 457 233 464 224 464S208 457 208 448V272H32C23 272 16 265 16 256S23 240 32 240H208V64C208 55 215 48 224 48S240 55 240 64V240H416C425 240 432 247 432 256Z"/></svg>
            </div>
        )
    } else {
        return (
            <div className={'button'} onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    {/*Font Awesome Pro 6.0.0-alpha1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License)*/}
                    <path
                        d="M432 256C432 265 425 272 416 272H240V448C240 457 233 464 224 464S208 457 208 448V272H32C23 272 16 265 16 256S23 240 32 240H208V64C208 55 215 48 224 48S240 55 240 64V240H416C425 240 432 247 432 256Z"/>
                </svg>
            </div>
        )
    }
}
export default CircleButton