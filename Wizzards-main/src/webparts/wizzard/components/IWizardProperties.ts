import {IWizardStep} from './IWizardStep';
export interface IWizardProperties {

    
    steps: IWizardStep[];
    context: string;
    destPath: string;
    srcPath: string;
    trainer:string;
    

}
