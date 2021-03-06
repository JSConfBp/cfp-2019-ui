
import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import deepPurple from '@material-ui/core/colors/deepPurple';

const styles = theme => ({
	progress: {
		width: 128,
		height: 160,
		margin: '0 auto',
		marginBottom: 32,
		marginTop: 16,
		position: 'relative'
	},
	circle: {
		top: 0,
		width: 128,
		height: 128,
		color: deepPurple[500],
		zIndex: 2,
		position: 'absolute'
	},
	shadow: {
		top: 0,
		width: 128,
		height: 128,
		color: deepPurple[100],
		zIndex: 1,

	},
	name: {
		display: 'block',
		textAlign: 'center',
		paddingTop: 10
	},
	percent: {
		zIndex: 3,
		position: 'absolute',
		left: 0,
		width: 128,
		textAlign: 'center',
		top: 54,
	},
});

class TotalProgress extends React.Component {
	render() {
		const { classes, stats} = this.props

		const userCount = stats.length
		const total = stats[0].total
		const sum = stats.reduce((sum, stat) => (sum + stat.count), 0)

		const percent = Math.round(100 * (sum / (userCount * total)))

		return <div className={classes.progress}>
			<CircularProgress
				size="128"
				className={classes.circle} variant="static" value={percent} />
			<CircularProgress
				size="128"
				className={classes.shadow} variant="static" value={100} />

			<span className={classes.percent}>
				{percent}%
			</span>
			<strong className={classes.name}>
				Total progress
			</strong>
		</div>
	}
}

export default withStyles(styles)(TotalProgress)
