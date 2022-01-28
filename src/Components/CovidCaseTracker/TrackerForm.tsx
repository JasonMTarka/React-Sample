import { Form, Button } from "react-bootstrap";
import { LANGUAGES } from "../../Text/defaults";
import { TRACKER_TXT as TEXT } from "../../Text/trackerText";
import { TrackerFormProps } from "../../types/tracker";


export default function TrackerForm({
  language,
  handleInputChange,
  handleSubmit,
}: TrackerFormProps) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>
          {language === LANGUAGES.JP
            ? TEXT.JP.COUNTRY_INPUT
            : TEXT.ENG.COUNTRY_INPUT}
        </Form.Label>
        <Form.Control
          type="name"
          placeholder="Japan"
          onChange={(event) => handleInputChange(event.target.value)}
        />
        <Form.Text className="text-muted">
          {language === LANGUAGES.JP
            ? TEXT.JP.COUNTRY_INPUT_SMALL
            : TEXT.ENG.COUNTRY_INPUT_SMALL}
        </Form.Text>
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}
