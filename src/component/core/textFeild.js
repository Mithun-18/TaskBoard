
export default function TextFeild({placeHolder,inRef,type='text'}){

    return <input type={type} placeHolder={placeHolder +" *"} className={'inputField'} ref={inRef}/>
}