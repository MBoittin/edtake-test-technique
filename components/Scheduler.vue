<template>
    <div>
        <ejs-schedule id="Schedule" :group="group" :eventSettings='eventSettings' height="100%" width="100%">
            <e-views>
                <e-view option='TimelineDay' startHour='7:00' endHour='20:00'></e-view>
                <e-view option="TimelineWeek"></e-view>
                <e-view option="TimelineMonth"></e-view>
            </e-views>
            <e-resources>
                <e-resource
                    field="ResourceId"
                    title="Resource"
                    name="Resources"
                    :allowMultiple="allowMultiple"
                    :dataSource="formatedResources"
                    textField="name"
                    idField="id"
                    colorField="color"
                ></e-resource>
            </e-resources>
        </ejs-schedule>
    </div>
</template>

<script>
import { TimelineViews, TimelineMonth, DragAndDrop } from '@syncfusion/ej2-vue-schedule';

export default {
    props: {
        resources: {
            type: Array,
            validator: (resources) => {
                return resources.every((resource) => (resource.name && resource.color))
            },
        },
        events: {
            type: Array,
            validator: (events) => {
                return events.every((event) => (event.Id && event.Subject && event.StartTime && event.EndTime && event.ResourceId))
            }
        }
    },
    data() {
        return {
            allowMultiple: true,
            group: {
                resources: ['Resources']
            },
            eventSettings:{
                dataSource: this.events
            }
        }
    },
    provide: {
        schedule: [TimelineViews, TimelineMonth, DragAndDrop]
    },
    computed: {
        formatedResources() {
            let formatedResources = this.resources.map((resource, index) => {
                return { id: index + 1, name: resource.name, color: resource.color }
            })
            formatedResources.push({ id: formatedResources.length + 1, name: "Unassigned", color: "#BBC7CD" })
            return formatedResources
        },
    }
}
</script>

<style>
@import "~/node_modules/@syncfusion/ej2-base/styles/material.css";
@import "~/node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "~/node_modules/@syncfusion/ej2-calendars/styles/material.css";
@import "~/node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "~/node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "~/node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "~/node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "~/node_modules/@syncfusion/ej2-vue-schedule/styles/material.css";
</style>