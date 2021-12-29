import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class NavigationPath extends LightningElement {
    NavigatetoviewAccount() {
        this[NavigationMixin.Navigate]({     
            type: 'standard__objectPage',     
                attributes: {     
                recordId:'0010p000011B1w2AAC',     
                objectApiName: 'Account',     
                actionName: 'View'     
            },    
         });     
      }
      NavigatetonewAccount(){
          this[NavigationMixin.Navigate]({
              type:'standard__objectPage',
              attributes:{
                  recordId:this.recordId,
                  objectApiName: 'Account',
                  actionName: 'New'
              }
          })
      }
      NavigatetoeditAccount(){
          this[NavigationMixin.Navigation]({
              type: 'standard__objectPage',
              attributes:{
                  recordId:'0010p000011B1w2AAC',
                  objectApiName: 'Account',
                  actionName: 'edit',

              }
          })
      }
      NavigatetonewComponent(){
          this[NavigationMixin.Navigation]({
              type:"standard__componenet",
              "componentName":"c__myComponent",
          })
      }
}