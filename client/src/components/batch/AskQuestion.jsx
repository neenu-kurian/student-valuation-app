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
        this.handleClick=this.handleClick.bind(this)
    }
   
    componentWillMount(){
        const randomstudent = this.props.student[Math.floor(Math.random() * this.props.student.length)]
        this.props.getRandomStudent(randomstudent)
    }

    handleClick(e) {
        e.preventDefault()
        const randomstudent = this.props.student[Math.floor(Math.random() * this.props.student.length)]
        this.props.getRandomStudent(randomstudent)
        
       
    }

    render() {

        const studentlength = this.props.student.length

        const greenstudent = this
            .props
            .student
            .filter(function (student) {
                return student.evaluation === 'green'
            })
            .length

        const yellowstudent = this
            .props
            .student
            .filter(function (student) {
                return student.evaluation === 'yellow'
            })
            .length

        const redstudent = this
            .props
            .student
            .filter(function (student) {
                return student.evaluation === 'red'
            })
            .length

        const numofredchances = Math.round(0.53 * studentlength)
        const numofyellochances = Math.round(0.28 * studentlength)
        const numofgreenchances = Math.round(0.19 * studentlength)

        

        return (
            <div>
                {<Card className="random-card">
                 
                    <CardContent >
                        <br/>
                        <Typography component="h1">
                            {this.props.askquestion.randomstudent.studentname}
                        </Typography>
                        <br/>
                        <Typography component="h1">
                            <img alt="Student"
                                style={{
                                maxHeight: '100px'
                            }}
                                src={this.props.askquestion.randomstudent.studentimage}/>
                        </Typography>

                    </CardContent>

                        </Card>}

                <Button
                    color="primary"
                    variant="raised"
                    type="submit"
                    onClick={this.handleClick}
                    className="get-random">Get Another Student</Button>

                <Link to ={`/batches/${this.props.match.params.id}`}>
                    <Button color="primary" variant="raised" type="submit" className="create-batch">All Students</Button>
                </Link>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({student: state.students,askquestion:state.askquestion})

export default connect(mapStateToProps, {getRandomStudent})(AskQuestion)
