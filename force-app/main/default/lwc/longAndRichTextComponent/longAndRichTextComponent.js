import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import LongAndRichTextField from '@salesforce/schema/Task.Long_and_Rich_Text_Field__c';



export default class LongAndRichTextComponent extends LightningElement {
    taskRecord;
    @api recordId;


    //call APEX Method to get Task.Long_and_Rich_Text_Field__c, use this id in the record form


    handleSubmit(){

        //update Task.Long_and_Rich_Text_Field__c to set the Id if LongAndRichText__c record does not exist yet
    }
}