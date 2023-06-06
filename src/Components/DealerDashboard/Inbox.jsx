import {
  AddCircleOutline,
  Check,
  DeleteOutline,
  EditOutlined,
  InfoOutlined,
  MailOutline,
  StarBorderOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import Header from "./Header";
import Mail from "./Mail";

const Container = styled.div``;
const Wrapper = styled.div``;
const HeaderCon = styled.div`
  position: sticky;
  top: 0;
  background: #fff7f3;
`;

const SortWrapper = styled.div``;
const SortCon = styled.div`
  background: white;
  padding: 10px;
  width: 100px;
  font-size: 21px;
  margin: 10px 0;
`;
const SortConSelect = styled.select`
  border: none;
  width: 130px;
  font-size: 16px;
`;
const SortConOption = styled.option``;
const SortButtonCon = styled.div``;
const SortButton = styled.div`
  background: orangered;
  color: white;
  border-radius: 9px;
  padding: 6px 13px;
  cursor: pointer;
`;
const MailCon = styled.div`
  flex: 5;
  margin-right: 30px;
`;

const SelectMailCon = styled.div`
  background: white;
  flex: 2;
  padding: 20px 15px;
`;
const SelectMail = styled.div`
  padding: 10px;
  background: #ffe8e4;
  box-sizing: border-box;
  border-radius: 5px;
  margin-bottom: 7px;
  cursor: pointer;
`;
const SelectMailTextCon = styled.div``;
const SelectMailIcon = styled.div``;
const SelectMailText = styled.span`
  color: #ff9584;
`;
const SelectMailNumCon = styled.span`
  background: #ff9584;
  border-radius: 16px;
  padding: 0 9px;
`;
const SelectMailNum = styled.span`
  color: #ffe8e4;
`;
function Inbox({ route }) {
  const inboxMsg = [
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
  ];

  return (
    <Container>
      <HeaderCon>
        <Header route={route} />
      </HeaderCon>
      <SortWrapper className="flex aic jcsb">
        <SortCon className="flex aic jcc">
          <SortConSelect>
            <SortConOption>Order by</SortConOption>
            <SortConOption>Order by</SortConOption>
            <SortConOption>Order by</SortConOption>
          </SortConSelect>
        </SortCon>
        <SortButtonCon>
          <SortButton className="flex aic jcc">
            <AddCircleOutline sx={{ marginRight: "4px" }} />
            Compose Mail
          </SortButton>
        </SortButtonCon>
      </SortWrapper>
      <Wrapper className="flex aifs jcfs">
        <MailCon>
          {inboxMsg.map((item, i) => (
            <Mail key={i} />
          ))}
        </MailCon>
        <SelectMailCon>
          <SelectMail className="flex aic jcsb">
            <SelectMailTextCon className="flex aic jcc">
              <SelectMailIcon className="flex aic jcc">
                <MailOutline sx={{ color: "#ff9584", marginRight: "7px" }} />
              </SelectMailIcon>
              <SelectMailText>Inbox</SelectMailText>
            </SelectMailTextCon>
            <SelectMailNumCon className="flex aic jcc">
              <SelectMailNum>68</SelectMailNum>
            </SelectMailNumCon>
          </SelectMail>
          <SelectMail className="flex aic jcsb">
            <SelectMailTextCon className="flex aic jcc">
              <SelectMailIcon className="flex aic jcc">
                <Check sx={{ color: "#ff9584", marginRight: "7px" }} />
              </SelectMailIcon>
              <SelectMailText>Send</SelectMailText>
            </SelectMailTextCon>
            <SelectMailNumCon className="flex aic jcc">
              <SelectMailNum>68</SelectMailNum>
            </SelectMailNumCon>
          </SelectMail>
          <SelectMail className="flex aic jcsb">
            <SelectMailTextCon className="flex aic jcc">
              <SelectMailIcon className="flex aic jcc">
                <EditOutlined sx={{ color: "#ff9584", marginRight: "7px" }} />
              </SelectMailIcon>
              <SelectMailText>Draft</SelectMailText>
            </SelectMailTextCon>
            <SelectMailNumCon className="flex aic jcc">
              <SelectMailNum>68</SelectMailNum>
            </SelectMailNumCon>
          </SelectMail>
          <SelectMail className="flex aic jcsb">
            <SelectMailTextCon className="flex aic jcc">
              <SelectMailIcon className="flex aic jcc">
                <StarBorderOutlined
                  sx={{ color: "#ff9584", marginRight: "7px" }}
                />
              </SelectMailIcon>
              <SelectMailText>Starred</SelectMailText>
            </SelectMailTextCon>
            <SelectMailNumCon className="flex aic jcc">
              <SelectMailNum>68</SelectMailNum>
            </SelectMailNumCon>
          </SelectMail>
          <SelectMail className="flex aic jcsb">
            <SelectMailTextCon className="flex aic jcc">
              <SelectMailIcon className="flex aic jcc">
                <InfoOutlined sx={{ color: "#ff9584", marginRight: "7px" }} />
              </SelectMailIcon>
              <SelectMailText>Spam</SelectMailText>
            </SelectMailTextCon>
            <SelectMailNumCon className="flex aic jcc">
              <SelectMailNum>68</SelectMailNum>
            </SelectMailNumCon>
          </SelectMail>
          <SelectMail className="flex aic jcsb">
            <SelectMailTextCon className="flex aic jcc">
              <SelectMailIcon className="flex aic jcc">
                <DeleteOutline sx={{ color: "#ff9584", marginRight: "7px" }} />
              </SelectMailIcon>
              <SelectMailText>Trash</SelectMailText>
            </SelectMailTextCon>
            <SelectMailNumCon className="flex aic jcc">
              <SelectMailNum>68</SelectMailNum>
            </SelectMailNumCon>
          </SelectMail>
        </SelectMailCon>
      </Wrapper>
    </Container>
  );
}

export default Inbox;
