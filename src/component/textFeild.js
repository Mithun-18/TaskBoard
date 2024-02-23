
export default function TextFeild({placeHolder,inRef}){

    return <input type={'text'} placeHolder={placeHolder +" *"} className={'inputField'} ref={inRef}/>
}