"use client"

import dayjs from "dayjs"
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { Alert , AlertTitle , Button , Grid} from "@mui/material"
import { Event } from "@/types";

type Props = {
    events : Event[];
    setOpen : React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Calender({ events, setOpen }: Props) {
    let yearly = dayjs().subtract(365, "days").format("YYYY-MM-DD");
    const formattedEvents = events.map((event) => ({
      ...event,
      date: dayjs(event.date).format("YYYY-MM-DD"),
    }));
    return (
      <Grid item className="Calendar border" sx={{ p: 4 }}>
        <Grid
          direction="row"
          container
          item
          justifyContent="space-between"
          alignItems="center"
          justifyItems="center"
          sx={{ mb: 4 }}
        >
          <h2>Migraine</h2>
          <Button
            className="info"
            variant="outlined"
            onClick={() => setOpen(true)}
          >
            New
          </Button>
        </Grid>
        <CalendarHeatmap
          startDate={yearly}
          showWeekdayLabels
          values={formattedEvents}
          classForValue={(value) => {
            if (!value) {
              return "color-empty";
            }
            return `primary opacity-${value.count}`;
          }}
        />
        <Alert severity="info">
          <AlertTitle>Beta</AlertTitle>
          <span>
            Migrainedata.app is currently in beta; more is coming about reports
            for your migraines.
          </span>
        </Alert>
      </Grid>
    );
  }