import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Button from 'material-ui/Button'
import {getRandomStudent} from '../../actions/operations'
import Card, { CardContent} from 'material-ui/Card'
import Typography from 'material-ui/Typography'


class AskQuestion extends PureComponent {
    constructor(){
        super()
        this.getRandomColor=this.getRandomColor.bind(this)
        this.getStudentRandom=this.getStudentRandom.bind(this)
    }
   
    componentWillMount(){
        const randomstudent = this.props.student[Math.floor(Math.random() * this.props.student.length)]
        this.props.getRandomStudent(randomstudent)
    }
   
     getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    };
   
    getRandomColor(weight,filteredcolors){
        const total_weight=Number(100);
              
        var random_num = this.getRandomNumber(0, total_weight)
        let weight_sum=0;

        for (let i = 0; i < filteredcolors.length; i++) {
            weight_sum += weight[i];
            weight_sum = +weight_sum.toFixed(2);
             
            if (random_num <= weight_sum) {
                return filteredcolors[i];
            }
        }
    }

    getStudentRandom(weight,filteredcolors){
        const selectedcolor=this.getRandomColor(weight,filteredcolors)
       const selectedstudent=this.props.student.filter((eachstudent)=>{
           if(eachstudent.evaluation===selectedcolor)
           return eachstudent
       })
       if(selectedstudent.length>0) {
       this.props.getRandomStudent(selectedstudent[0])
       console.log(selectedstudent[0].evaluation)
       }
       else{
           alert(`No students with color ${selectedcolor} .Please try again`)
       }

    }

    render() {
   
        
        const weight=[19,28,53]
       
       const filteredcolors=["green","yellow","red"]
        
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
                            <img alt="Student"
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
                    onClick={()=>this.getStudentRandom(weight,filteredcolors)}
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
