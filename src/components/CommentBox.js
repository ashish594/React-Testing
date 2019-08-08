import React, {Component} from 'react';
import {saveComment, fetchComments} from 'actions';
import {connect} from 'react-redux';

class CommentBox extends Component {
    state = {
        comment: '',
    };

    handleChange = (e) => {
        this.setState({comment: e.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({comment: ''});
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Add a comment</h4>
                <textarea value={this.state.comment} onChange={this.handleChange}/>
                <div>
                    <button>Submit</button>
                    <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
                </div>
            </form>
        );
    }
}

const mapDispatchToProps = {
    saveComment,
    fetchComments
};

export default connect(null, mapDispatchToProps)(CommentBox);