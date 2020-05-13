import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
name:'employeetitle'
})

export class EmployeeTitlePipe implements PipeTransform{
    transform(value:string, gender:string) : string{
        if(gender.toLowerCase() == 'male'){
            return 'MR.' + value;
        }
        else{
            return 'MISS.' + value;
        }
    }
}