import { LightningElement, api, wire, track} from'lwc';
import CURRENTUSERID from '@salesforce/user/Id';
import fetchBaseURL from '@salesforce/apex/Fetchurl.fetchBaseURL';
export default class FetchRecordId extends LightningElement {
    //Get direct Link
    @api recordId;
    @api objectApiName;
    @track link;
    @track hlink;
    @wire(fetchBaseURL)
    wiredAccounts({ error, data }) {
        if(data) {
            //console.log(data);
            this.link = data;
            console.log(data);
        } else if (error) {
            console.log(error);
            this.error = error;
        }    
    }
    handleString(evt){
        console.log('test***********************'+this.link);
        this.hlink =this.link +"/" +this.objectApiName+"/"+this.recordId;
        console.log('8888888888888888888888888'+this.hlink);
    }
}