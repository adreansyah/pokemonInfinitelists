import React, { Component } from "react"
import PropTypes from "prop-types"
import { BehaviorSubject } from "rxjs"
import { throttleTime } from "rxjs/operators"
let lastPosWindowY = {}

class InfiniteScroll extends Component {
    constructor(props) {
        super(props)
        this.scrollStream = new BehaviorSubject()
    }
    componentDidMount() {
        const { refs, parentId } = this.props
        const latest = lastPosWindowY[refs] !== undefined ? lastPosWindowY[refs] : window.innerHeight
        window.scrollTo(0, parseInt(latest) - window.innerHeight)
        if (parentId) {
            this.scrollListener = document.getElementById(parentId).addEventListener("scroll", (e) => this.handleScrollFromParent(e))
        } else {
            this.scrollListener = window.addEventListener("scroll", (e) => {
                this.handleScroll(e)
            })
        }
    }

    componentDidUpdate() {
        const { refs, hasMore, threshold, loadMore, isLoading } = this.props
        const el = refs ? this.refs[refs] : this.refs["infiniteRef"]
        if (el) {
            let elOffset = el.offsetTop + el.clientHeight
            let pageOffset = Math.ceil(window.innerHeight)
            let addedOffset = threshold ? parseInt(threshold) : 0
            let loadMoreOffset = Math.ceil(elOffset - addedOffset)
            if (pageOffset >= loadMoreOffset && hasMore) {
                if (typeof isLoading === undefined || !isLoading) {
                    loadMore()
                }
            }
        }
    }

    componentWillUnmount() {
        const { refs, parentId } = this.props
        lastPosWindowY = {
            ...lastPosWindowY,
            [refs]: window.pageYOffset + window.innerHeight,
        }
        if (parentId) {
            this.scrollListener = document.getElementById(parentId).removeEventListener("scroll", (e) => {
                this.handleScrollFromParent(e)
            })
        } else {
            this.scrollListener = window.removeEventListener("scroll", (e) => {
                this.handleScroll(e)
            })
        }
    }

    handleScroll = () => {
        const { refs, hasMore, threshold, loadMore, isLoading } = this.props
        const el = refs ? this.refs[refs] : this.refs["infiniteRef"]
        if (el) {
            let elOffset = el.offsetTop + el.clientHeight
            let pageOffset = Math.ceil(window.pageYOffset + window.innerHeight)
            let addedOffset = threshold ? parseInt(threshold) : 0
            let loadMoreOffset = Math.ceil(elOffset - addedOffset)
            if (pageOffset >= loadMoreOffset && hasMore) {
                if (typeof isLoading === undefined || !isLoading) {
                    this.scrollStream.pipe(throttleTime(2000)).subscribe(() => loadMore())
                }
            }
        }
    }
    
    handleScrollFromParent = () => {
        const { refs, hasMore, threshold, loadMore, isLoading, parentId } = this.props
        const el = refs ? this.refs[refs] : this.refs["infiniteRef"]
        const parent = document.getElementById(parentId)
        if (el && parent) {
            let elOffset = el.offsetTop + el.clientHeight
            let pageOffset = Math.ceil(parent.offsetTop + parent.clientHeight + parent.scrollTop)
            let addedOffset = threshold ? parseInt(threshold) : 0
            let loadMoreOffset = Math.ceil(elOffset - addedOffset)
            if (pageOffset >= loadMoreOffset && hasMore) {
                if (typeof isLoading === undefined || !isLoading) {
                    this.scrollStream.pipe(throttleTime(2000)).subscribe(() => loadMore())
                }
            }
        }
    }

    render() {
        const { element, hasMore, refs, threshold, loader, children, loadMore, error, hasError, isLoading, parentId, ...attributes } = this.props
        const childrenArray = [children]
        if (hasMore) {
            if (loader) {
                childrenArray.push(loader)
            }
        }
        if (error) {
            childrenArray.push(error)
        }

        return React.createElement(element, { ...attributes, ref: refs }, childrenArray)
    }
}

InfiniteScroll.propTypes = {
    children: PropTypes.node,
    element: PropTypes.node,
    hasMore: PropTypes.bool,
    loader: PropTypes.node,
    loadMore: PropTypes.func,
    refs: PropTypes.string,
    threshold: PropTypes.number,
    hasError: PropTypes.bool,
    error: PropTypes.node,
    parentId: PropTypes.string,
}

InfiniteScroll.defaultProps = {
    element: "div",
    hasMore: false,
    refs: "infiniteRef",
    threshold: 0,
    loader: null,
    hasError: false,
    error: null,
}
export default InfiniteScroll
