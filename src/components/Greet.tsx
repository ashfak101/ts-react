
type GreatProps ={
      name:string,
      messageCount?:number 
      isLoggedIn:boolean
}

const Great =(props:GreatProps)=>{
      const {messageCount = 0}=props;
      return (
            <div>
                 {
                   props.isLoggedIn ? <h2>welcome {props.name} miya! You have {messageCount} unread messages</h2>:
                   <h2>Welcome Guest</h2>
                 }
            </div>
      )
}
export  default  Great