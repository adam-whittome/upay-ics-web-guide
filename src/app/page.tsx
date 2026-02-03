"use client"

import Heading from "@/components/atoms/Heading";
import InlineLink from "@/components/atoms/InlineLink";
import InlineMono from "@/components/atoms/InlineMono";
import Subheading from "@/components/atoms/Subheading";
import Subtext from "@/components/atoms/Subtext";
import Text from "@/components/atoms/Text";
import TextEntry from "@/components/atoms/TextEntry";
import CenteredColumn from "@/components/layout/CenteredColumn";
import NumberedList from "@/components/layout/NumberedList";
import CopyBox from "@/components/molecules/CopyBox";
import { useState } from "react";

const calendarIntegrationURL = "https://4er7voy5n22wjt4tprnqkfedb40ibfxm.lambda-url.eu-north-1.on.aws/?authToken=";

export default function Home() {
  const [authToken, setAuthToken] = useState<string>("");

  return <CenteredColumn>
    <Heading>Upay Calendar Integration Guide</Heading>
    <Subtext>Adam Whittome</Subtext>
    <Text>
      This guide will take you through the steps of obtaining a URL, which can be used in your calendar, to synchronise
      your bookings made through Upay.
    </Text>
    <Text>
      This process can be broken down into 3 steps:
    </Text>
    <NumberedList>
      <Text>Obtaining your personal Upay <InlineMono>AuthToken</InlineMono> (just a string of characters).</Text>
      <Text>Combining the <InlineMono>AuthToken</InlineMono> with the calendar integration URL.</Text>
      <Text>Subscribing to the calendar integration URL in your calendar of choice.</Text>
    </NumberedList>
    <Text>
      This guide requires that you are using a desktop/laptop device with a modern browser.
    </Text>
    <Subheading>Obtaining your personal Upay <InlineMono>AuthToken</InlineMono></Subheading>
    <Text>
      In order for this to work, you need to be signed in on Upay, and have auto-sign-in enabled.
    </Text>
    <Text>
      Navigate to <InlineLink href="https://upay.co.uk/">upay.co.uk</InlineLink>, and press F12 or fn + F12 to open
      your web browser's developer menu. Along the top of this window, there will be tabs  with names e.g. 'Console' or
      'Network'.
    </Text>
    <Text>
      On Chromium-based browsers, you need to open the tab named 'Application' (you may need to press the two arrows
      to the right of the tabs in order to see this option). Then in the newly opened list, find the 'Local Storage'
      tab, under 'Storage', and click on the dropdown arrow next to it. Now click on the https://upay.co.uk option.
      You should see a list of keys and values: find the <InlineMono>AuthToken</InlineMono> key and double click its
      value and copy it.
    </Text>
    <Text>
      On Firefox-based browsers, you need to open the tab named 'Storage' (you may need to press the two arrows
      to the right of the tabs in order to see this option). Then in the newly opened list, find the 'Local Storage'
      tab, and click on it. Now click on the https://upay.co.uk option. You should see a list of keys and values: find
      the <InlineMono>AuthToken</InlineMono> key and double click its value and copy it.
    </Text>
    <Text>
      Well done! If you followed these steps correctly you should have your <InlineMono>AuthToken</InlineMono> in your
      clipboard, ready to paste.
    </Text>
    <Subheading>Combining the <InlineMono>AuthToken</InlineMono> with the calendar integration URL</Subheading>
    <Text>
      Paste your <InlineMono>AuthToken</InlineMono> below to generate your calendar integration URL.
    </Text>
    <TextEntry valueState={[authToken, setAuthToken]} placeholder="Paste here" />
    {
      authToken != "" ? (<>
        <Text>Now copy the calendar integration URL below</Text>
        <CopyBox text={calendarIntegrationURL + authToken} />
      </>) : <></>
    }
    <Subheading>Subscribing to the calendar integration URL in your calendar of choice</Subheading>
    <Text>
      You're almost there! This step is dependent on what calendar you use, however the steps are similar. First, you
      add a calendar, and make sure you select the option that uses a URL. Then paste the URL into the text entry.
      After saving these changes, you should see your events appear after about a minute.
    </Text>
    <Text>
      After this, changes in your Upay bookings may take multiple hours to propagate to your calendar, as calendars
      typically only check for changes at this time scale.
    </Text>
  </CenteredColumn>;
}
