import { motion, AnimatePresence } from 'framer-motion'
import FeedBackItem from '../FeedBackItem/FeedBackItem'
import PropTypes from 'prop-types'

const FeedbackList = ({ feedback, handleDelete }) => {
	if (!feedback || feedback.length === 0) {
		return <p>No Feedback Yet...</p>
	}
	return (
		<div className='feedback-list'>
			<AnimatePresence>
				{feedback.map(item => (
					<motion.div
						key={item.id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<FeedBackItem
							handleDelete={() => handleDelete(item.id)}
							key={item.id}
							item={item}
						/>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	)
}

FeedbackList.propTypes = {
	feedback: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			rating: PropTypes.number.isRequired,
		})
	),
}

export default FeedbackList
