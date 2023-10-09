const actions = {
    loadPosts(context) {
        axios
            .get(`${post_url}`)
            .then((res) => res.data)
            .then((items) => context.commit("setPosts", items))
            .catch((err) => console.error(err));
    },
    loadPost(context, payload) {
        axios
            .get(`${post_url}/${payload.id}`)
            .then((res) => res.data)
            .then((item) => context.commit("setPost", item))
            .catch((err) => console.error(err));
    },
    removePost(context, id) {
        axios
            .delete(`${post_url}/${id}`)
            .then((res) => res.data)
            .then((items) => context.commit("setPosts", items))
            .catch((err) => console.error(err));
    },
    addPost(context, payload) {
        axios
            .post(`${post_url}`, payload)
            .then((res) => res.data)
            .then((items) => context.commit("setPosts", items))
            .catch((err) => console.error(err));
    },
};
export default {
    state, getters, actions, mutations,
};