"use client";
import { Button } from "@/components/Button";
import { ButtonCheck } from "@/components/ButtonCheck";
import { Input } from "@/components/Input";
import { Message } from "@/components/Message";
import { Typography } from "@/components/Typography";
import { timeRanges, TimeRangeType } from "@/constants/time-range.constant";
import { searchClaims } from "@/services/claims";
import { JournalType } from "@/types/journal.type";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import * as yup from "yup";
import styles from "./ResearchForm.module.scss";

type ResearchFormProps = {
  journals: JournalType[];
};

const validationSchema = yup.object().shape({
  selectedTimeRange: yup.number().required(),
  claimsToAnalyze: yup.number().required(),
  influencerName: yup.string().required(),
  selectedJournalIds: yup.array().of(yup.number()),
});

export const ResearchForm = ({ journals }: ResearchFormProps) => {
  const [selectedTimeRange, setSelectedTimeRange] = useState<number | null>(7);
  const [selectedJournalIds, setSelectedJournalIds] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleTimeRangeChange = (timeRange: TimeRangeType) => {
    setSelectedTimeRange(timeRange.daysAgo);
  };

  const handleJournalChange = (journalId: number) => {
    if (selectedJournalIds.includes(journalId)) {
      setSelectedJournalIds(
        selectedJournalIds.filter((id) => id !== journalId)
      );
    } else {
      setSelectedJournalIds([...selectedJournalIds, journalId]);
    }
  };

  const formik = useFormik({
    initialValues: {
      selectedTimeRange,
      claimsToAnalyze: 10,
      influencerName: "",
      selectedJournalIds,
    },
    validationSchema,
    onSubmit: async (data) => {
      console.log({ data });
      setLoading(true);
      const params = {
        username: data.influencerName,
        startTime: data.selectedTimeRange,
        limit: data.claimsToAnalyze,
        journalsIds: data.selectedJournalIds,
      };
      try {
        const { data: influencer } = await searchClaims(params);
        console.log({ influencer });
        toast.success("Successfully research!");
        router.push(`/influencers/${influencer.id}`);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className={styles["research_form"]}>
      <div className="wrapper">
        <div className="wrapper-column">
          <ButtonCheck active disabled={loading}>
            <Typography center element="h3">
              Specific influencer
            </Typography>
            <Typography center element="p" color="alt">
              Research a known health influencer by name
            </Typography>
          </ButtonCheck>
        </div>
        <div className="wrapper-column">
          <ButtonCheck disabled={loading}>
            <Typography center element="h3">
              Specific influencer
            </Typography>
            <Typography center element="p" color="alt">
              Research a known health influencer by name
            </Typography>
          </ButtonCheck>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="wrapper">
          <div className="wrapper-column">
            <div className="wrapper-section">
              <Typography small color="alt">
                Time Range
              </Typography>
              <div className="wrapper">
                <div className="wrapper-column">
                  {timeRanges
                    .slice(0, Math.ceil(timeRanges.length / 2))
                    .map((timeRange) => (
                      <ButtonCheck
                        disabled={loading}
                        active={timeRange.daysAgo === selectedTimeRange}
                        key={`time-range-${timeRange.name}`}
                        onClick={() => handleTimeRangeChange(timeRange)}
                      >
                        <Typography center element="p" color="alt">
                          {timeRange.name}
                        </Typography>
                      </ButtonCheck>
                    ))}
                </div>
                <div className="wrapper-column">
                  {timeRanges
                    .slice(Math.ceil(timeRanges.length / 2))
                    .map((timeRange) => (
                      <ButtonCheck
                        disabled={loading}
                        active={timeRange.daysAgo === selectedTimeRange}
                        key={`time-range-${timeRange.name}`}
                        onClick={() => handleTimeRangeChange(timeRange)}
                      >
                        <Typography center element="p" color="alt">
                          {timeRange.name}
                        </Typography>
                      </ButtonCheck>
                    ))}
                </div>
              </div>
              {formik.errors.selectedTimeRange && (
                <Message>{formik.errors.selectedTimeRange}</Message>
              )}
            </div>
          </div>
          <div className="wrapper-column">
            <div className="wrapper-section">
              <Typography small color="alt">
                Claims to Analyze Per Influencer
              </Typography>
              <div className="wrapper">
                <Input
                  disabled={loading}
                  placeholder="How many claims do you want to analyze?"
                  onChange={formik.handleChange}
                  value={formik.values.claimsToAnalyze}
                  name="claimsToAnalyze"
                />
              </div>
              {formik.errors.claimsToAnalyze && (
                <Message>{formik.errors.claimsToAnalyze}</Message>
              )}
            </div>
            <div className="wrapper-section">
              <Typography small color="alt">
                Influencer Name
              </Typography>
              <div className="wrapper">
                <Input
                  disabled={loading}
                  placeholder="Enter influencer name"
                  leftDecorator={<BiSearchAlt2 />}
                  onChange={formik.handleChange}
                  value={formik.values.influencerName}
                  name="influencerName"
                />
              </div>
              {formik.errors.influencerName && (
                <Message>{formik.errors.influencerName}</Message>
              )}
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="wrapper-column">
            {journals
              .slice(0, Math.ceil(journals.length / 2))
              .map((journal) => (
                <ButtonCheck
                  disabled={loading}
                  onClick={() => handleJournalChange(journal.id)}
                  active={selectedJournalIds.includes(journal.id)}
                  key={`journal-${journal.id}`}
                >
                  <Typography element="p" color="alt">
                    {journal.name}
                  </Typography>
                </ButtonCheck>
              ))}
          </div>
          <div className="wrapper-column">
            {journals.slice(Math.ceil(journals.length / 2)).map((journal) => (
              <ButtonCheck
                disabled={loading}
                onClick={() => handleJournalChange(journal.id)}
                active={selectedJournalIds.includes(journal.id)}
                key={`journal-${journal.id}`}
              >
                <Typography element="p" color="alt">
                  {journal.name}
                </Typography>
              </ButtonCheck>
            ))}
          </div>
        </div>
        <div className={`$"wrapper" ${styles["wrapper--pull_right"]}`}>
          <Button type="submit" disabled={loading}>
            <FaPlus />
            Start Research
          </Button>
        </div>
      </form>
    </div>
  );
};
