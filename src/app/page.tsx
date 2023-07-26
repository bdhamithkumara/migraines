"use client"

import * as React from 'react';
import { useState } from 'react';
import {Container , Grid} from "@mui/material"
import UserHeader from '@/componets/user/Header';
import Calender from '@/componets/Calender';
import Form from '@/componets/Form';
import { Event } from '@/types';

export default function Home() {
  const [events, setEvents] = useState<Array<Event>>([] )
  const [open, setOpen] = useState(false)
  return (
    <Container>
      <Grid> <UserHeader/> </Grid>
      <Grid>
        { !open && <Calender events={events} setOpen={setOpen} />}
        {open && <Form  setEvents={setEvents} setOpen={setOpen} />}
      </Grid>
    </Container>
  )
}
