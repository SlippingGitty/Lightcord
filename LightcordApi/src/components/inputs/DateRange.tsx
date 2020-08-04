/** TODO: Finish DateRange */

import * as React from "react"
import Flex, { FlexChild } from "../general/Flex"
import Text from "../general/Text"

export const DateConstants = {
    DATE_FORMAT: "yyyy-MM-dd"
}
export type DateRangeProps = {
    dateFormat?: string,
    defaultEnd: Date,
    defaultStart: Date,
    className?: string,
    onChange?: (start:Date, end:Date) => void,
    maxDate?:Date,
    minDate?:Date,
    filterDate?:() => void,
    showMonthYearPicker: boolean
}
export default class DateRange extends React.Component<DateRangeProps, {
    end: Date,
    start: Date
}> {
    static defaultProps:Partial<DateRangeProps> = {
        dateFormat: DateConstants.DATE_FORMAT
    }

    static displayName = "DateRange"

    constructor(props:DateRangeProps){
        super(props)
        this.state = {
            end: props.defaultEnd,
            start: props.defaultStart
        }
    }

    componentDidUpdate(oldProps:DateRangeProps){
        let defaultStart = this.props.defaultStart
        if(oldProps.defaultStart !== defaultStart){
            this.setState({
                start: defaultStart
            })
        }
    }

    handleEndChange(end:Date){
        this.setState({
            end: end
        }, this.handleChange)
    }

    handleStartChange(start:Date){
        this.setState({
            start: start
        }, this.handleChange)
    }

    getMaxDate(){
        if(this.props.maxDate)return this.props.maxDate
        return null
    }

    getMinDate(){
        if(this.props.minDate)return this.props.minDate
        return null
    }

    handleChange(){
        const onChange = this.props.onChange
        if(onChange == null)return
        const state = this.state
        const start = state.start
        const end = state.end
        onChange(start, end)
    }

    render(){
        const state = this.state
        const start = state.start
        const end = state.end
        const props = this.props
        const filterDate = props.filterDate
        const showMonthYearPicker = props.showMonthYearPicker

        return <Flex className="lc-dateWrapper">
            <FlexChild grow={0}>
                <Text className="lc-dateLabel" size="small" 
                    textCase="uppercase" weight="semibold" color="primary_dark_300">
                    FROM
                </Text>
            </FlexChild>
            <FlexChild grow={0}>
                
            </FlexChild>
            <FlexChild grow={0}>
                <Text className="lc-dateLabel" size="small" 
                    textCase="uppercase" weight="semibold" color="primary_dark_300">
                    TO
                </Text>
            </FlexChild>
            <FlexChild grow={0}>
                
            </FlexChild>
        </Flex>
    }
}