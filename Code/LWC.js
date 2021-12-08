import {LightningElement} from 'lwc';

import {NavigationMixin} from 'lightning/navigation';

export default class NavigationComponent extends NavigationMixin(LightningElement) {

    NavigatetonewLead() {

   this[NavigationMixin.Navigate]({

       type: 'standard__objectPage',

           attributes: {

           recordId:this.recordId,

           objectApiName: 'Lead',

           actionName: 'new'

       },

    });

 }
 //LWC JS File

 NavigatetoeditAccount() {

    this[NavigationMixin.Navigate]({

        type: 'standard__recordPage',

            attributes: {

            recordId: '0015g00000HjHI6AAN',

            objectApiName: 'Account',

            actionName: 'edit'

        },

     });

  }

  NavigatetonewComponent(){

    this[NavigationMixin.Navigate]({

            "type": "standard__component",

            "attributes": {

               

                "componentName": "c__myComponent"

            }

        });



    }

 

}
