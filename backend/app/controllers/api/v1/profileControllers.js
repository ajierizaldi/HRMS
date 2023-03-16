module.exports = {
    getProfile: async (req, res) => {
        try {
            const {
                user_id,
                name,
                email,
                role_id
            } = req.user;

            return res.status(200).send({
                user_id,
                name,
                email,
                role_id
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
                error: error,
                data: null
            });
        }
    }
}