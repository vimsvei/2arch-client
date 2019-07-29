import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { withService } from '../hoc';
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";

const ArchitectureState = ({getArchitectureState}) => {
  return(
    <div>
	  <InputLabel htmlFor="outlined-age-simple">
		State
	  </InputLabel>
	  <Select
		input={<OutlinedInput name="State" id="outlined-age-simple" />}
	  >
		<MenuItem value="">
		  <em>None</em>
		</MenuItem>
		{
		  getArchitectureState()
			.then((result) => {
			  result.map((item) => {
				return(
				  <MenuItem value={item.id}>{name}</MenuItem>
				);
			  })
			})
		}
	  </Select>
	</div>
  );
};

const mapMethodToProps = (service) => {
  return {
	getArchitectureState: service.directory.getArchitectureState
  };
};

export default withService(mapMethodToProps)(ArchitectureState);
