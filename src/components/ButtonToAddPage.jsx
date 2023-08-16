/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { Button } from "@chakra-ui/react"

export default function ButtonToAddPage({ id,data }) {
    return (    
      <div>
        { id ? (
        <Link to= {`/post/${data}/${id}`}>
            <Button ml="10px" colorScheme="purple">Add {data}</Button>
        </Link>
        ) : (
        <Link to= {`/post/${data}`}>
            <Button ml="10px" colorScheme="purple">Add {data}</Button>
        </Link>
        )
        
        }
      </div>
    );
      
  }