import React from "react";
import Post from "./Post";

const masterPostList = [
    {
        names: 'Jessy Toil',
        subject: 'Just saw the last jedi, was ok I guess.'
    },
    {
        names: 'Rump Donald',
        subject: 'Look at that text! Would anyone use that? Can you imagine that, the text of your next webpage?! Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen. That other text? Sadly, it’s no longer a 10.'
    },
    {
        names: 'Lorem Ispum',
        subject: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra tellus in hac habitasse platea dictumst vestibulum.'
    },
    {
        names: 'Hodor',
        subject: 'Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor.'
    },
    {
        names: 'Buzz',
        subject: 'I believe that space travel will one day become as common as airline travel is today. I’m convinced, however, that the true future of space travel does not lie with government agencies.'
    }

];

function PostList() {
    return (
        <React.Fragment>
            <hr />
            {masterPostList.map((post, index) =>
                <Post names={post.names}
                    subject={post.subject}
                    key={index} />
            )}
        </React.Fragment>
    );
}

export default PostList;