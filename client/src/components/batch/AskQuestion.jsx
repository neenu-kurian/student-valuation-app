import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Button from 'material-ui/Button'
import {getRandomStudent} from '../../actions/operations'
import Card, { CardContent} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import { Redirect } from 'react-router'

 
const weight=[19,28,53]
       
const filteredcolors=["green","yellow","red"]

const randomstate={
    id:" ",
    batchid:" ",
    evaluation:" ",
    evaluationdetails:" ",
    studentimage:" ",
    studentname:" "
}

class AskQuestion extends PureComponent {
    constructor(){
        super()
        this.getRandomColor=this.getRandomColor.bind(this)
        this.getStudentRandom=this.getStudentRandom.bind(this)
    }
   
    componentWillMount(){
        this.getStudentRandom()
    }
   
     getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    };
   
    getRandomColor(weight,filteredcolors){
        const total_weight=Number(100);
              
        var random_num = this.getRandomNumber(0, total_weight)
        console.log(random_num)
        let weight_sum=0;

        for (let i = 0; i < filteredcolors.length; i++) {
            weight_sum += weight[i];
            
             
            if (random_num <= weight_sum) {
                return filteredcolors[i];
            }
        }
    }

    getStudentRandom(){
        const selectedcolor=this.getRandomColor(weight,filteredcolors)
        let isEvaluated = false
       const selectedstudent=this.props.student.filter((eachstudent)=>{
           if(eachstudent.evaluation===selectedcolor){
               isEvaluated=true
           return eachstudent
           }else if(eachstudent.evaluation===null){
               isEvaluated = false
           }
           else if(eachstudent.evaluation!==null){
               isEvaluated=true
           }
          
       })
    //    console.log(selectedstudent[0].evaluation)
        if(selectedstudent.length>0) {
            this.props.getRandomStudent(selectedstudent[0])
         }else{
             if(!isEvaluated){
                alert("No evaluation happend yet for the selected student")
             }else{
                alert(`No students with color ${selectedcolor} .Please try again`)                
            }
           
           this.props.getRandomStudent(randomstate)
           // <Link to={`/batches/${this.props.match.params.id}`}/>
       }


    }

    render() {
   
       
        
        return (
            <div>
                {<Card className="random-card">
                 
                    <CardContent >
                        <br/>
                        <Typography component="h1">
                            {this.props.randomstudent.studentname}
                        </Typography>
                        <br/>
                        <Typography component="h1">
                            <img 
                                style={{
                                maxHeight: '100px'
                            }}
                                src={this.props.randomstudent.studentimage}/>
                        </Typography>

                    </CardContent>

                        </Card>}

                <Button
                    color="primary"
                    variant="raised"
                    type="submit"
                    onClick={this.getStudentRandom}
                    className="get-random">Get Another Student</Button>

                <Link to ={`/batches/${this.props.match.params.id}`}>
                    <Button color="primary" variant="raised" type="submit" className="create-batch">All Students</Button>
                </Link>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({student: state.students,randomstudent:state.randomstudent})

export default connect(mapStateToProps, {getRandomStudent})(AskQuestion)
