import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../index.css';

class myMems extends Component {
    render() {
        return (
            <div >
                {
                    this.props.myMeme.map((meme,index)=>{
                        return(
                            <img 
                            key={index}
                            src={meme.data.url}
                            alt="my-meme"
                            className="my-meme-img"/>
                        )
                    })
                }
                
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        myMeme:state.myMeme
    }
}


export default connect (mapStateToProps,null)(myMems);