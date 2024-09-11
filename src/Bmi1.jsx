import {useState} from 'react'
export const Bmi1 = () => {
const [Height,SetHeight]=useState("")
const [Weight,SetWeight]=useState("")
const [BmiValue,SetBmiValue]=useState(null)
const [Status,SetStatus]=useState("")
const Bmi = () => {
    if(Height&&Weight){
        const Hinm=Height/100
        const Bmi_=Weight/(Hinm*Hinm)
        SetBmiValue(Bmi_.toFixed(2))
        if(Bmi_<18.5){
            SetStatus("Under Weight!")
        }
        else if(Bmi_>18.5&&Bmi_<24.9){
            SetStatus("normal!")
        }
        else if(Bmi_>24.9&&Bmi_<29){
            SetStatus(" overweighted !")
        }
        else{
            SetStatus("Obessed ! ")
        }
    }
    
            }
  return (
    <div>
        
     <div className='flex justify-center mt-[200px]' >
    <div className='border-2 flex flex-col gap-4 items-center border-slate-400 w-[300px] p-9'>
  
        <h1 className='ml-0 text-blue-600 text-[20px]'>BMI Calculator </h1>
        <div>
        <h1 className='text-blue-400' >Weight (kg) :</h1>
        <input type="text" placeholder='Enter your weight'  onChange={(e)=>SetWeight(e.target.value)} value={Weight}  className='border-2 border-slate-300 w-[250px] h-6' />
        </div> 
        <div>
        <h1 className='text-blue-400'>Height (cm) :</h1>
        <input type="text" value={Height} placeholder='Enter your Height' onChange={(e)=>SetHeight(e.target.value)}  className='border-2 border-slate-300 h-6 w-[250px]'/>
        </div>
        <div className='flex flex-row gap-8 text-[15px] '>
            <button className='border-1 border-red-400 w-[100px] rounded-[5px]  text-slate-100 bg-red-300' onClick={Bmi}>Calculate BMI</button>
            <button className='border-1 border-red-400 w-[100px]  rounded-[5px] bg-red-300 text-slate-100'>clear</button>
        </div>
       {BmiValue!==null&&( <div className='border-[.1px] border-slate-500 w-[100%] h-[80px] pl-3 pt-4 text-slate-400 text-[15px] flex flex-col '>
           <div className='flex flex-row gap-2'> 
            <p className='w-[100px]  font-medium text-blue-400'> Your BMI  </p>
            <p className=' text-blue-400'>{BmiValue}</p>
            </div>
           <div className='flex flex-row gap-2'> 
                <p className='w-[100px]  font-medium' >Status </p>
                <p>{Status}</p>
            </div>
                </div>)}
        </div>                
    </div>
    </div>
  )
  }
